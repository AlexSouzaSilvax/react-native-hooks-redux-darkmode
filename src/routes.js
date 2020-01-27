import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Tela1 from "./pages/Tela1";
import Tela2 from "./pages/Tela2";

const Routes = createAppContainer(
  createSwitchNavigator({
    Tela1,
    Tela2
  })
);

export default Routes;