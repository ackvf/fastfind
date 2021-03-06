const resetCss = `
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: content-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
figure,
blockquote,
dl,
dd {
  margin: 0;
}
`;

export default resetCss;
