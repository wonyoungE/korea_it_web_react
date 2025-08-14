import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1px;
`;

export const listContainer = css`
  flex-grow: 1px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;

  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    height: 424px;

    & > li {
      position: relative;
      padding: 7px 15px;
      border-bottom: 1px solid #dbdbdb;
      box-sizing: border-box;
      display: flex;
      align-items: center;

      // input을 가려놓고
      & > input[type="checkbox"] {
        display: none;
        width: 20px;
        height: 20px;

        // label 가상요소
        & + label {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin-right: 10px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
        }

        // 체크 되었을 때 안에 파란 원
        &:checked + label::after {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #0b4f8f;
        }
      }
    }
  }
`;

export const hiddenTrashBox = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;

  &:hover > div {
    right: 0;
  }
`;

export const trashBox = css`
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 0;
  right: -40px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea0808;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const todoInputContainer = css`
  margin-top: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 5px 15px;

  & > input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;
