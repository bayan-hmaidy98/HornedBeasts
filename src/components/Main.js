import React from 'react';

import data from './assets/data.json';
import HornedBeast from "./HornedBeasts";

class Main extends React.Component {

  render() {
    return (
      <main>
        {
          data.map(element => {
            return (
              <HornedBeast
                title={element.title}
                description={element.description}
                image_url={element.image_url}

              />
            );
          })
        }

      </main>
    );
  }
}

export default Main;
