import styled from "styled-components";

const AppMain = styled.div`
  width: calc(100% - 256px);
  min-height: 100vh;
  padding: 50px 80px 45px;
  position: relative;
  margin-left: 256px;
  margin-right: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #fff;

  header {
    margin: 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 28vw;
    width: calc(100% - 80px - 25vw);
    padding: 45px 40px 70px;
    background-image: linear-gradient(180deg, #fff 0%, #fff 57%, rgba(255, 255, 255, 0) 100%);
  }

  header img {
    max-height: 30px;
    position: relative;
    z-index: 3000;
  }
  /* h1 {
    font-size: 40px;
    font-weight: 500;
  }
  h2 {
    font-size: 48px;
    line-height: 52px;
    font-weight: 500;
  } */
  /* p {
    font-size: 20px;
    line-height: 27px;
    margin: 20px 0 30px;
    color: #6b6b6b;
  } */

  /* INFO STYLES */
  /* INFO STYLES */
  /* INFO STYLES */
  /* INFO STYLES */
  .checkboxes {
    max-height: 40vh;
    overflow-y: auto;
    margin: -10px -30px 10px;
    padding: 10px 30px;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
  }
  .checkboxes,
  .radios,
  .projectType-select {
    margin-bottom: 10px;
  }
  .checkboxes input[type="checkbox"],
  .checkboxes input[type="radio"],
  .radios input[type="checkbox"],
  .radios input[type="radio"],
  .projectType-select input[type="checkbox"],
  .projectType-select input[type="radio"] {
    display: none;
  }
  .checkboxes input[type="checkbox"]:checked + label,
  .checkboxes input[type="radio"]:checked + label,
  .radios input[type="checkbox"]:checked + label,
  .radios input[type="radio"]:checked + label,
  .projectType-select input[type="checkbox"]:checked + label,
  .projectType-select input[type="radio"]:checked + label {
    background: #001b4e;
    color: white;
  }
  .checkboxes input[type="checkbox"] + label,
  .checkboxes input[type="radio"] + label,
  .radios input[type="checkbox"] + label,
  .radios input[type="radio"] + label,
  .projectType-select input[type="checkbox"] + label,
  .projectType-select input[type="radio"] + label {
    min-height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 25px;
    border-radius: 6px;
    box-shadow: 0 12px 20px 2px rgba(0, 0, 0, 0.17);
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .members-select {
    width: 100%;
    border-radius: 6px;
    background: white;
    box-shadow: 0 12px 20px 2px rgba(0, 0, 0, 0.17);
    padding: 25px 25px 20px;
    margin-bottom: 30px;
  }
  .members-select__radios {
    border-radius: 6px;
    border: 1px solid #c6cbd3;
    overflow: hidden;
  }
  .members-select__radios .row .radio:not(:last-child) input[type="radio"] + label {
    border-right: 1px solid #c6cbd3;
  }
  .members-select input[type="radio"] {
    display: none;
  }
  .members-select input[type="radio"]:checked + label {
    background: #001b4e;
    color: white;
  }
  .members-select input[type="radio"] + label {
    width: 100%;
    height: 68px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    margin-bottom: 0;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .members-select input[type="radio"] + label {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    border-right: 1px solid #c6cbd3;
  }
  .members-select__bottom {
    margin-top: 30px;
    font-size: 14px;
  }
  .members-select__bottom p {
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;
    margin-bottom: 0;
    color: #7f8a9c;
  }
  .members-select__bottom strong {
    display: block;
    font-weight: 500;
  }
  .members-select__bottom span {
    font-size: 21px;
    margin-top: 10px;
    display: block;
  }
  .members-select__bottom span strong {
    font-size: 28px;
    font-weight: 500;
    display: inline;
  }
  input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]) {
    height: 52px;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid #dddfe2;
    width: 100%;
    margin-bottom: 30px;
  }
  textarea {
    padding: 20px 25px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid #dddfe2;
    width: 100%;
    margin-bottom: 30px;
    resize: none;
  }
  label.custom-label {
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
    color: #7f8a9c;
    margin-bottom: 18px;
    width: 100%;
  }
  select {
    height: 60px;
    padding: 16px 25px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid #dddfe2;
    width: 100%;
    margin-bottom: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: white;
    background-image: url(../img/client-form-arrow.svg);
    background-repeat: no-repeat;
    background-position: right 15px center;
    width: 100%;
  }

  @media (max-width: 1023px) {
    width: calc(100% - 96px);
    margin-left: 96px;
    padding: 40px 45px 80px;
  }
  @media (max-width: 991px) {
    header {
      width: 100%;
      left: 0;
      padding: 15px 25px;
      background: white;
      border-bottom: 1px solid #eee;
      pointer-events: initial;
    }
    header img {
      height: 45px;
    }
    h2 {
      font-size: 40px;
      line-height: 44px;
    }
    .checkboxes input[type="checkbox"] + label,
    .checkboxes input[type="radio"] + label,
    .radios input[type="checkbox"] + label,
    .radios input[type="radio"] + label,
    .projectType-select input[type="checkbox"] + label,
    .projectType-select input[type="radio"] + label {
      min-height: 50px;
      font-size: 14px;
      padding: 10px 15px;
    }
  }

  @media (max-width: 767px) {
    width: 100vw;
    padding: 120px 24px 40px;
    margin-left: 0;
    .button-primary {
      min-height: 40px;
      font-size: 14px;
      padding: 0 15px;
    }
    .button-primary svg {
      height: 12px;
    }
    .checkboxes input[type="checkbox"] + label,
    .checkboxes input[type="radio"] + label,
    .radios input[type="checkbox"] + label,
    .radios input[type="radio"] + label,
    .projectType-select input[type="checkbox"] + label,
    .projectType-select input[type="radio"] + label {
      min-height: 40px;
      font-size: 12px;
      padding: 5px 15px;
    }
    .members-select {
      padding: 15px;
    }
    .members-select__radios {
      border-radius: 6px;
      border: 1px solid #c6cbd3;
      overflow: hidden;
    }
    .members-select__radios .row .radio:not(:last-child) input[type="radio"] + label {
      border-right: 1px solid #c6cbd3;
    }
    .members-select input[type="radio"] {
      display: none;
    }
    .members-select input[type="radio"]:checked + label {
      background: #001b4e;
      color: white;
    }
    .members-select input[type="radio"] + label {
      height: 50px;
      padding: 0 10px;
      font-size: 20px;
    }
    .members-select input[type="radio"] + label:last-child {
      width: 100%;
      border-top: 1px solid #c6cbd3;
    }
    .members-select input[type="radio"] + label:nth-last-of-type(2) {
      border-right: none;
    }
    .members-select__bottom {
      margin-top: 25px;
      font-size: 12px;
    }
    .members-select__bottom p {
      font-size: 11px;
      line-height: 15px;
    }
    .members-select__bottom span {
      font-size: 18px;
      margin-top: 10px;
      display: block;
    }
    .members-select__bottom span strong {
      font-size: 24px;
    }
    label.custom-label {
      font-size: 14px;
      margin-bottom: 10px;
    }
    input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]) {
      height: 46px;
      font-size: 12px;
      padding: 0 15px;
    }
    textarea {
      font-size: 12px;
      padding: 12px 15px;
    }
    select {
      height: 46px;
      font-size: 12px;
      padding: 0 15px;
    }
  }

  @media (max-width: 575px) {
    header img {
      height: 20px;
    }
  }

  @media (max-width: 390px) {
    .members-select .includes {
      display: none;
    }
  }
`;

export default AppMain;
