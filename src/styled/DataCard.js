import styled from 'styled-components';

const DataCard = styled.div`
width: 50vw;
max-width: 500px;
max-height: 100%;
border: 1px solid light-grey;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
margin: 6vh auto;
text-align: center;
padding: 20px;
@media(min-width: 700px) {
  padding: 30px;
}
@media(min-width: 950px) {
  
}

img {
  margin: 0 auto;
  display block;
  width: 100%;
  max-width: 500px;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
   -o-appearance: none;
    appearance: none;
  height: 25px;
  border: none;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 4px;
  font-size: 120%;
}
ul {
  list-style: none;
  padding: 0 0 10px 0;
  margin: 0;
  li {

  }
    select {
      color: grey; 
			width: 100%;
      height: 2em;
      padding-bottom: 0.5vh;
      font-size: 1em;
      @media(min-width: 750px){
        font-size: 1.25em;
      }
			border-radius: 0;
			border: 1px solid Gainsboro;
			text-align-last:center;
			&:focus { outline: none;}
			option {
				text-align: center;
			}
    }
  }
}
`;

export default DataCard