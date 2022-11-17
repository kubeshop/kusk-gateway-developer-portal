import styled from 'styled-components';

export const Container = styled.div`
  rapi-doc::host {
    --nav-get-color: purple !important;
  }
  rapi-doc::part(section-navbar) {
    border-right: 1px solid #e2e8f0;
  }

  rapi-doc::part(section-tag) {
    display: none;
  }

  rapi-doc::part(operation-divider) {
    display: none;
  }

  rapi-doc::part(section-operations-in-tag) {
    border-top: 1px solid #e2e8f0;
  }
  rapi-doc::part(label-selected-server) {
    display: none;
  }

  rapi-doc::part(textbox textbox-nav-filter) {
    background-color: transparent;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
  }
`;
