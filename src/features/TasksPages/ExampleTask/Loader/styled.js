import styled from "styled-components";

export const Spiner = styled.div`
  margin-right: 15px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

   @keyframes spin {
    0% {
     transform: rotate(0deg);
    };
    100% {
     transform: rotate(360deg);
    };
  }`
