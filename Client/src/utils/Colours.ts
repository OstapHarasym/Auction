export enum Colours {
  Primary
}

export function getColour(colour: Colours) {
  switch (colour) {
    case Colours.Primary: return "primary"
  }
}