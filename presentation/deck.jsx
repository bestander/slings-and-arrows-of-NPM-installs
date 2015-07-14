import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  "codeship-fail": require("./codeship-fail.png"),
  "npm-cli-fail": require("./npm-cli-fail.png"),
  "npm-github-fail": require("./npm-github-fail.png"),
  "committed": require("./npm-committed.png"),
  "committed-2": require("./npm-committed-2.png"),
  "npm-git-lock": require("./npm-git-lock.png"),
  "how-to-use": require("./how-to-use.png"),
  "olivier": require("./olivier.jpg"),
  "lawrence": require("./lawrence.jpg"),
  "arnold": require("./arnold.jpg"),
};

preloader(Object.keys(images).map((key) => images[key]));

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide bgImage={images["olivier"].replace('/','')} transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps textColor="white">
            The slings and arrows of npm installs
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            The tradegy of a CI ops engineer
          </Heading>
          <Link  href="https://github.com/bestander/spectacle">
            <Text margin="100px 0 0 0" textColor="white">Slides source: https://github.com/bestander/spectacle</Text>
          </Link>
        </Slide>
        <Slide transition={['slide']} bgColor="black" >
          <Heading size={1}  textColor="primary" textFont="secondary">
            Me
          </Heading>
          <Layout>
            <Fill>
              <Link href="https://github.com/bestander">
                <Text bold caps textColor="tertiary">github/bestander</Text>
              </Link>
              <Link href="https://twitter.com/bestander_nz">
                <Text bold caps textColor="tertiary">twitter/bestander_nz</Text>
              </Link>
              <Link href="https://booktrack.com">
                <Text bold caps textColor="tertiary">booktrack.com</Text>
              </Link>
              <Link href="https://medium.com/@bestander_nz/my-node-modules-are-in-git-again-4fb18f5671a">
                <Text bold textColor="tertiary">Talk is based on a blog post</Text>
              </Link>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage={images["lawrence"].replace('/','')} bgDarken="0.5" transition={['']} textColor="primary">
          <Heading size={1}  textColor="primary" textFont="secondary">
            NPM is quite great
          </Heading>
          <List>
            <ListItem><Appear fid="1">1e1000 modules</Appear></ListItem>
            <ListItem><Appear fid="2">Developer friendly</Appear></ListItem>
            <ListItem><Appear fid="3">Light</Appear></ListItem>
          </List>
        </Slide>
        <Slide  transition={['zoom', 'fade']} bgColor="black" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={1}  textColor="primary" textFont="secondary">
            The not so great part
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black" bgSize="contain" bgImage={images["codeship-fail"].replace('/','')}>
        </Slide>
        <Slide transition={['slide']} bgColor="black" bgSize="contain" bgImage={images["npm-cli-fail"].replace('/','')}>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Common reasons for npm install fail</Heading>
          <List>
            <ListItem><Appear fid="1">API break in dependency tree (loose semver)</Appear></ListItem>
            <ListItem><Appear fid="2">Native components compilation problems</Appear></ListItem>
            <ListItem><Appear fid="3">NPM repo availability</Appear></ListItem>
            <ListItem><Appear fid="4">Package got removed</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading caps fit>Recommended way to solve this</Heading>
          <BlockQuote>
            <Quote>Remove "node_modules" from .gitignore</Quote>
            <Cite>Official recomendation by NPM and Node before 2014</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black">
          <Image src={images.committed.replace('/','')} margin="0px auto 40px" height="200px"/>
          <Image src={images["committed-2"].replace('/','')} margin="0px auto 40px" height="293px"/>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black">
          <Heading caps fit>Recommended way to solve this</Heading>
          <BlockQuote>
            <Quote>Use npm-shrinkwrap</Quote>
            <Cite>Official recomendation by NPM and Node after 2014</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <List>
            <ListItem><s>API break in dependency tree (loose semver)</s></ListItem>
            <ListItem>CLI installation problems</ListItem>
            <ListItem>NPM repo availability</ListItem>
            <ListItem>Package got removed</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images["arnold"].replace('/','')} transition={["slide"]} bgColor="primary">
          <Heading caps fit>A better way to solve it</Heading>
          <Text bold textColor="tertiary">Use a separate GIT repo for node_modules</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" bgSize="contain" bgImage={images["npm-git-lock"].replace('/','')}>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" bgPosition="0% 0%" bgSize="cover" bgImage={images["how-to-use"].replace('/','')}>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading>Thank you!</Heading>
          <Link href="https://medium.com/@bestander_nz/my-node-modules-are-in-git-again-4fb18f5671a">
            <Text bold textColor="tertiary">Read a blog post</Text>
          </Link>
          <Link href="https://github.com/bestander/npm-git-lock">
            <Text bold caps textColor="tertiary">https://github.com/bestander/npm-git-lock</Text>
          </Link>
          <Link href="https://github.com/bestander/spectacle">
            <Text textColor="tertiary">Slides source code: https://github.com/bestander/spectacle</Text>
          </Link>

        </Slide>
      </Deck>
    );
  }
}
