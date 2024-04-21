const { default: styled } = require("styled-components");

const OptionList = styled.div`
  display: flex;
  gap: 15px;
`;

const ButtonOption = styled.button`
  padding: 8px 10px;
  background: transparent;
  font-weight: 200;
  border-radius: 5px;
  border: 0.5px dashed black;
  &:hover {
    cursor: pointer;
    border-color: olive;
    transition: border-color 0.5s ease-in;
  }
  &:active {
    background: olive;
  }
`;

export { ButtonOption, OptionList };
