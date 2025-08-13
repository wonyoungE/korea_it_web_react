import { css } from "@emotion/css";

// export 해줘야 밖에서 쓸 수 있음
export const box1 = css`
  width: 100px;
  height: 100px;
  background-color: black;
`;

export const box2 = (color) => css`
  width: 100px;
  height: 100px;
  background-color: ${color};
`;
