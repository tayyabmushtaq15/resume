import React from 'react';

export const extractImageSrc = (imageContent: React.ReactNode): string | null => {
  if (!imageContent) return null;
  
  try {
    // If it's a React element (JSX)
    if (React.isValidElement(imageContent)) {
      const props = imageContent.props as any;
      
      // Check if it's an img element directly
      const elementType = imageContent.type;
      if (elementType === 'img' || (typeof elementType === 'string' && elementType === 'img')) {
        return props?.src || null;
      }
      
      // Check props directly (might be wrapped)
      if (props?.src) {
        return props.src;
      }
      
      // Check if it has children that might be an img
      if (props?.children) {
        const children = React.Children.toArray(props.children);
        for (const child of children) {
          if (React.isValidElement(child)) {
            const childProps = child.props as any;
            const childType = child.type;
            if (childType === 'img' || (typeof childType === 'string' && childType === 'img')) {
              return childProps?.src || null;
            }
            // Recursively check nested children
            if (childProps?.src) {
              return childProps.src;
            }
          }
        }
      }
    }
  } catch (error) {
    console.warn('Error extracting image src:', error);
  }
  
  return null;
};

