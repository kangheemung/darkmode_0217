import React from 'react';
const Footer = ({ isDark, setIsDark}) => {
  const toggleTheme = () => {
        setIsDark(!isDark);
    };
  return (
    <div
    className = 'footer'
    style = {{
        backgroundColor : isDark ? 'black':'lightgray',
        }}
        >
        <button className = "button" onClick = {toggleTheme}>
            Dark Mode
        </button>
      <p>Footer</p>
    </div>
  )
}

export default Footer
