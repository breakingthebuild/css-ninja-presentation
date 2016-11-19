// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#252839",
  headingColor: "#f2b632",
  textColor: "#b5b5b7",
  textColorSecondary: "#677077"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={4} caps textColor="headingColor">
              Journey from CSS Noob to Ninja
            </Heading>
            <CodePane
              lang="css"
              source={require("raw!../assets/ninja-css.example")}
              margin="20px auto" />

            <Text textColor="textColorSecondary">notes from css dev conference</Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              HTTP/2
            </Heading>

            <List>
              <Appear><ListItem>binary vs. textual</ListItem></Appear>
              <Appear><ListItem>fully multiplexed vs. ordered and blocking</ListItem></Appear>
              <Appear><ListItem>use one connection for parallelism</ListItem></Appear>
              <Appear><ListItem>uses header compression to reduce overhead</ListItem></Appear>
              <Appear><ListItem>servers "push" responses proactively into client caches</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Pixels, Ems and Rems — Oh My!
            </Heading>

            <List>
              <Appear><ListItem>typography is about ratios</ListItem></Appear>
              <Appear><ListItem>use relative units for font-size</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Pixels, Ems and Rems — Oh My!
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">Viewport relative units</Text>
            <List>
              <ListItem>vw - % of viewport width</ListItem>
              <ListItem>vh - % of viewport height</ListItem>
              <ListItem>vmin - smaller of vh/vw</ListItem>
              <ListItem>vmax - larger of vh/vw</ListItem>
            </List>

            <Link href="http://keithjgrant.com/talks/stop-thinking-in-pixels/demo-page-calc.html" target="_blank"><Text textSize=".75em" textColor="textColorSecondary">Demo</Text></Link>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Perceived Performance
            </Heading>

            <List>
              <Appear>
                <ListItem>
                  Objective time vs. Subjective time
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">We optimize for objective time but that is not very efficient</ListItem>
                    <ListItem textSize=".75em">Time differences of 20% or less are imperceptible</ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Active phase vs. Passive phase
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">Humans tend to overestimate passive waits by 36% - Richard Larson, MIT</ListItem>
                    <ListItem textSize=".75em">Make passive phase less painful</ListItem>
                    <ListItem textSize=".75em">Make active phase a greater proportion of the total time</ListItem>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Perceived Performance
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">What we can do?</Text>
            <List>
              <Appear>
                <ListItem>
                  Respond to users immediately
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">Mousedown event vs click event</ListItem>
                    <ListItem textSize=".75em">Mousedown gives you a 100 - 150 ms head start</ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Give users a sense of certainty
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">Uncertain waits feel longer</ListItem>
                    <ListItem textSize=".75em">Animation makes a difference</ListItem>
                    <ListItem textSize=".75em">Bars with accelerating bands feel 12% faster</ListItem>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Perceived Performance
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">What we can do?</Text>
            <List>
              <Appear>
                <ListItem>
                  Occupy users attention
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">Slack does a good job of this</ListItem>
                    <ListItem textSize=".75em">Games with tips while loading</ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Render minimum viable layout
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">Identify what your users interact with first</ListItem>
                    <ListItem textSize=".75em">Render that and lazy load the rest of the ui</ListItem>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Perceived Performance
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">What we can do?</Text>
            <List>
              <Appear>
                <ListItem>
                  Predictive Design
                  <List margin="auto auto auto 5.50rem" textColor="textColorSecondary">
                    <ListItem textSize=".75em">Need to get data first before doing this</ListItem>
                    <ListItem textSize=".75em">Airport moved the baggage claim further from the arriving gates</ListItem>
                    <ListItem textSize=".75em">Preload users next action before they take it</ListItem>
                  </List>
                </ListItem>
              </Appear>
            </List>

            <Link href="http://assets.eli.wtf/talks/perceived-perf-talk/demos/predictive-button-2.html" target="_blank"><Text textSize=".75em" textColor="textColorSecondary">Demo</Text></Link>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Living Style Guide from CSS
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">What to document</Text>
            <List>
              <ListItem>Colors</ListItem>
              <ListItem>Tokens/Variables</ListItem>
              <ListItem>Mixins/Functions</ListItem>
              <ListItem>Base Elements/Classes</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Living Style Guide from CSS
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">kss-node</Text>
            <List>
              <ListItem>Write documentation using "KSS syntax" comments</ListItem>
              <ListItem>Add to CSS, Sass, LESS, or any other CSS Preprocessor files</ListItem>
              <ListItem>KSS automatically builds a style guide from your stylesheets</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Living Style Guide from CSS
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">kss-node</Text>
            <CodePane
              lang="css"
              source={require("raw!../assets/kss.example")}
              margin="20px auto" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Living Style Guide from CSS
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColorSecondary">Examples</Text>
            <List>
              <ListItem><Link href="https://rizzo.lonelyplanet.com/styleguide" target="_blank"><Text textColor="textColor">Rizzo by Lonely Planet</Text></Link></ListItem>
              <ListItem><Link href="http://primercss.io/scaffolding/" target="_blank"><Text textColor="textColor">Primer by GitHub</Text></Link></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <List>
              <ListItem>Variables</ListItem>
              <ListItem>Mixins/Extends</ListItem>
              <ListItem>Color Functions</ListItem>
              <ListItem>Nesting</ListItem>
              <ListItem>Custom Selectors</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColor">Variables</Text>
            <CodePane
              lang="css"
              source={require("raw!../assets/variables.example")}
              margin="20px auto" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColor">Mixins/Extends</Text>
            <CodePane
              lang="css"
              source={require("raw!../assets/mixins.example")}
              margin="20px auto" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColor">Color Functions</Text>
            <CodePane
              lang="css"
              source={require("raw!../assets/color-function.example")}
              margin="20px auto" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColor">Nesting</Text>
            <CodePane
              lang="css"
              source={require("raw!../assets/nesting.example")}
              margin="20px auto" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColor">Custom Selectors</Text>
            <CodePane
              lang="css"
              source={require("raw!../assets/custom-selectors.example")}
              margin="20px auto" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              Use Latest CSS Today
            </Heading>

            <Text textAlign="left" textSize="1.5em" margin="50px 0px 0px" textColor="textColor">PostCSS</Text>
            <List>
              <ListItem>Write only CSS</ListItem>
              <ListItem>Modular</ListItem>
              <ListItem>Node based</ListItem>
              <ListItem>Ton of plugins</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="textColor">
            <Heading size={4} caps textColor="headingColor">
              ReactJS Workshop with Wes Bos
            </Heading>

            <List>
              <ListItem>Built an App in React.js from start to finish</ListItem>
              <ListItem>JSX markup</ListItem>
              <ListItem>New ES6 features</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
