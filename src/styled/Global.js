import style from 'styled-components';

const Global = style.div`
  html, body {
    font-size: 16px;
    margin-right: auto;
    margin-left: auto;
    
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: whitesmoke;
    color: black;
    font: Roboto;
    letter-spacing: 0.4px;
    -webkit-font-smoothing: subpixel-antialiased;
    *,
    *:before,
    *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  
`;

export default Global;
