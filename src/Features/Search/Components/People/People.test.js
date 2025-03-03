// import { shallow } from "enzyme";
import People from "./People";
// describe("People", () => {
//   it("this is a test for People", () => {
//     expect(shallow(<People />)).toMatchSnapshot();
//   });
// });
// import { shallow } from "enzyme";

// import People from "./People";
import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";

const PeopleList = {
  results: [
    {
      avatar: "People_Image.jpg",
      _id: "t5_imagepro",
      about:
        "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
      karma: 10,
    },
  ],
};
const PeopleFollow = {
  following: [
    {
      _id: "Ahmedlotfy202",
      avatar: "default.jpg",
      createdAt: "2022-12-20T02:21:09.233Z",
      about: "my name is lotfy and i will be 22 at 15DEC",
      karma: 10,
    },
  ],
};
describe("People component", () => {
  it('renders "People" in title', async () => {
    render(
      <TestingComponent>
        <People PeopleList={PeopleList} PeopleFollow={PeopleFollow} />
      </TestingComponent>
    );
    const outputElement = screen.getByText("People");
    expect(outputElement).toBeInTheDocument();
  });
  it("check that people are renders well", async () => {
    render(
      <TestingComponent>
        <People PeopleList={PeopleList} PeopleFollow={PeopleFollow} />
      </TestingComponent>
    );

    const listItemElements = await screen.findAllByTitle("people");
    expect(listItemElements).not.toHaveLength(0);
  });
});
// it("this is a test", () => {});
// s
