import "react-native";
import React from "react";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import Channels from "../index";

describe("$1", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Channels />).toJSON();

		expect(tree).toMatchSnapshot();
	});

  });
