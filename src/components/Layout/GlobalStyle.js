import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



${"" /* Grid Layout Utility Classes Start */}

.layout-grid {
  --gap: 1rem;
  display:grid;
  gap:var(--gap);
  

  &.columns{
    grid-auto-flow:column;
  }

  &.auto-fit{
    --min: 30ch;
    grid-template-columns:repeat(auto-fit, minmax(min(var(--min), 100%),1fr))
  }

  &.auto-fill {
    --min: 30ch;

    grid-template-columns: repeat(
      auto-fill,
      minmax(min(var(--min), 100%), 1fr)
    );
  }
  

  &.sidebar{
    --sidebar-max:20ch;
    --content-min: 50ch;
    grid-template-columns:fit-content(var(--sidebar-max))
    minmax(min(50vh, var(--content-min)), 1fr)
    ;
  }

  &.centered{
    place-content:center;
  }

  &.stack{
    grid-template-areas: "stack";
    place-items: center;

    & > * {
      grid-area: stack;
    }
  }
}
${"" /* Grid Layout Utility Classes Ends */}
  

article, .content{
  --content-spacer:1em; 
  ${"" /* Adds margin top to every element but the last in the selector */}
  & > * + * {
    margin-block-start: var(--content-spacer);
  }

${"" /* Adds martin top to list items excepts first */}
  & > * + * :where(ul:not([class]), ol:not([class])) li + li{
    margin-block-start: var(--content-spacer);
  }

  ${"" /* Adds margin top to h2/h3 that are not after an h2 */}
   & > * + *   :where(h2, h3:not(h2 + *)):where(:not(:first-child)) {
    margin-block-start: 2em;
  }

  ${"" /* If a Paragraph follows a list, adds extra space */}
  & > * + *   :where(ul, ol) + p {
    margin-block-start: calc(var(--content-spacer) * 2);
  }

  & >  a:not([class]) {
    
    display: inline-block;
  }

${"" /* Basic block quote styling, remove if you're not using quotes */}
  blockquote {
    margin-block: 2em;
    padding: 0.5em 1.5em;
    border-inline-start: 2px solid var(--color-secondary);
    font-size: 1rem * $type-scale-ratio;
  }
}
 
hr {
  margin: 8vh 5vw;
  border-style: solid;
  border-color: var(--color-tertiary);
}

strong {
  font-weight: bold;
}

${"" /* End of typography styles */}


${"" /* Link Styles, Hover Styles, Focus Styles Start */}
a:not([class]) {
  color: var(--color-secondary);
}

:is(a, button, input, textarea) {
  --outline-size: max(2px, 0.08em);
  --outline-style: solid;
  --outline-color: currentColor;

  &:focus {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset, var(--outline-size));
  }

  &:focus-visible {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset, var(--outline-size));
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
}

${"" /* Link Styles, Hover Styles, Focus Styles End */}



`;

export default GlobalStyle;
