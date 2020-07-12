import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    @media (min-width: 576px) {
        max-width: 576px;
    }
    @media (min-width: 768px) {
        max-width: 768px;
    }
    @media (min-width: 992) {
        max-width: 992px;
    }
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`;