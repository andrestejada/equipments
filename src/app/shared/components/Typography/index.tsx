import React from 'react';
interface Props {
  tag?: Tags;
  children?: string;
  styles?:React.CSSProperties
}
type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export const Typography = ({ tag, children ,styles }: Props) => {
  const Tag = tag ? tag : 'p';
  return <Tag 
            style={{...styles,margin:'0.8rem 0'}}
         >{children}</Tag>;
};
