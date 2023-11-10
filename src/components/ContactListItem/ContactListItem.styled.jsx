import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  margin-right: 10px;
`;

export const Button = styled.button`
  margin-left: 20px;  
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
    :hover {
    background-color: #e0e0e0;
    }
`;