export const MoveElement = (t, l) => `
  position: relative;
  top: ${t};
  left: ${l};
`;

export const FlexAlign = (jc, ai, d) => {
  switch(jc) {
    case 'sa':
      jc = 'space-around';
      break;
    case 'sb': 
      jc = 'space-between';
      break;
    case 'c':
      jc = 'center';
      break;
    case 's': 
      jc = 'flex-start';
      break;
    case 'e':
      jc = 'flex-end';
      break;
    case '': 
      jc = '';
      break;
    default: 
      jc = 'space-around';
  }

  switch(ai) {
    case 'c':
      ai = 'center';
      break;
    case 's': 
      ai = 'flex-start';
      break;
    case 'e':
      ai = 'flex-end';
      break;
    default: 
      ai = 'center'
  }

  switch (d) {
    case 'r':
      d = 'row'
      break;
    case 'c': 
      d = 'column';
      break;
    default:
      d = '';
      break;
  }

  return `
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${d};
  `
} 

export const BGImage = (img, lg) => {
  let BG;
  
  lg ?
    BG = `background-image: linear-gradient(${lg[0]}, ${lg[1]}, ${lg[2]}), url(${img})`
      :
    BG = `background-image: url(${img})`;

  return `
    ${BG};
    background-size: cover;
    background-position: center;
  `
} 

export const PositionAbsolute = (t, l) => `
  position: absolute;
  left: ${l};
  top: ${t};
`
