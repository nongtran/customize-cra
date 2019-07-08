import { getBabelLoader } from "./utilities";

describe("getBabelLoader finds the babel loader options", () => {
  const loader = { loader: "babel", options: { plugins: ["test"] } };

  test('in "oneOf" array', () => {
    const config = { module: { rules: [{ oneOf: [loader] }] } };
    expect(getBabelLoader(config)).toMatchSnapshot();
  });

  test('in a rule\'s "use" array', () => {
    const config = { module: { rules: [{ oneOf: [{ use: [loader] }] }] } };
    expect(getBabelLoader(config)).toMatchSnapshot();
  });
});
