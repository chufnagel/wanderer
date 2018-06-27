import { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// require("dotenv").config({ path: ".env.test" });

configure({ adapter: new Adapter() });

// Make Enzyme files globally available
global.shallow = shallow;
global.render = render;
global.mount = mount;
