import styled from 'styled-components'

export const ErrorMsg = styled.div`
  color: red;
`

export const LoginPanel = styled.div`
  display:block;
  padding:20px;
  margin:0 40%;
  width:300px;
  height:200px;
  border: 2px hidden #1C6EA4;
  border-radius: 11px;
  box-shadow: 0px 0px 33px 1px rgba(62,86,134,0.8);   
  z-index: 100;
`

export const HeaderLogin = styled.header`
position:absolute;
left:0;
top:0px;
width:100%;
height:150px;
background-color:rgba(37, 97, 97, 0.96); 
z-index: -1;
`

export const SubmitButton = styled.button`
  display: block;
  border-radius: 10px;
  margin: -5px;
  padding: 3px 18px;
  
  color: #fff;
  margin-bottom: 10px;
  background: #232632;
`

export const TextInput = styled.input`
  padding: 5px;
  background: #232632;
  color: #d3d4d6;
  width: 100%;
  margin-right: 7px;
  border: 0px;
  -webkit-appearance: none;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

export const Select = styled.select`
  color: #d3d4d6;
  padding: 5px;
  background: #232632;
  border: 0px;
  height: 25px;
`
