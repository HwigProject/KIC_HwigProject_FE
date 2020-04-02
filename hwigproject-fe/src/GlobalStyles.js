import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    html, body {width:100%; min-height:auto;overflow-x:hidden;color:#737373; }
html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, button, abbr, acronym, address, code,del, 
dfn, em, img, strong, sub, sup, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, 
td ,hr {margin:0;padding:0;font-size:100%;box-sizing: border-box;}
body {height:100%;min-height:100%;font-family:'Noto Sans Korean';font-size:16px;color:#737373;line-height:1.5}
h1, h2, h3, h4, h5, h6 {font-weight:normal}
ol, ul, li {list-style:none}
table {width:100%; border-collapse:collapse;border-spacing:0}
form, fieldset, iframe {display:block;border:0}
img, button {border:0 none;vertical-align:top; }
hr {height:0; display:none}
i, em, address{font-style:normal}
label, button{cursor:pointer}
blockquote, q {quotes:none}
caption, legend {overflow:hidden;visibility:hidden;position:absolute;width:0;height:0;padding:0;margin:0;font-size:0;text-indent:-100%;white-space:nowrap;z-index:-1}
header, footer, section, article, aside, nav, hgroup, details, menu, figure, figcaption {display:block;box-sizing: border-box;}
input, textarea, select, button {font-family:'Noto Sans Korean';font-size:16px;color:#919090;line-height:1.5;letter-spacing:0;vertical-align:middle; background:none; border:none;}
input, textarea {margin:0;padding:0}
input[type="text"],input[type="email"],input[type="phone"],input[type="password"]{padding:0 10px;}
textarea {resize:none; border:none; background:none; text-align:left; padding:10px;}
a {color:#666666;text-decoration:none}
a:link, a:visited {text-decoration:none}
a:hover {text-decoration:none}
.blind{display: none;overflow: hidden;position: absolute;width: 0;height: 0;padding: 0;margin: 0; font-size: 0;line-height: 0; text-indent: -9999em;visibility: hidden;outline: none;z-index: -1;}
`;


export default globalStyles;