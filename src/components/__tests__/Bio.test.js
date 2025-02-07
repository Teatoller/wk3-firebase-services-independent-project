import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Bio from "../bio/Bio";

describe("Bio Component", () => {
  let setBioMock, updateBioMock;

  beforeEach(() => {
    setBioMock = jest.fn();
    updateBioMock = jest.fn();
  });

  it("renders the bio component correctly", () => {
    render(<Bio bio="This is my bio" setBio={setBioMock} updateBio={updateBioMock} />);
    expect(screen.getByRole("textbox")).toHaveValue("This is my bio");
    expect(screen.getByRole("button", { name: /update bio/i })).toBeInTheDocument();
  });

  it("updates the bio text when typed into the textarea", () => {
    render(<Bio bio="Initial bio" setBio={setBioMock} updateBio={updateBioMock} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "Updated bio text" } });
    expect(setBioMock).toHaveBeenCalledWith("Updated bio text");
  });

  it("calls updateBio function when the button is clicked", () => {
    render(<Bio bio="My bio" setBio={setBioMock} updateBio={updateBioMock} />);
    const button = screen.getByRole("button", { name: /update bio/i });

    fireEvent.click(button);
    expect(updateBioMock).toHaveBeenCalledTimes(1);
  });
});
