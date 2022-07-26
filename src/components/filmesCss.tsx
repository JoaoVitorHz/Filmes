import styled from "styled-components";

export const FilmesCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    .filmesBackground{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        width: 80%;
    }
    .filmesItensBackground{
        display: flex;
        justify-content: center;
    }
    .filmes{
    }
`;
