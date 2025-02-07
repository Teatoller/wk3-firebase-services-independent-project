import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Skills from "../skills/Skills";

jest.mock("../helpers", () => ({
  Button: ({ children, onClick, className, style }) => (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  ),
  Input: ({ placeholder, value, onChange, className }) => (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  ),
}));

describe("Skills Component", () => {
  const mockSkills = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
  ];

  const mockAddSkill = jest.fn();
  const mockSetNewSkill = jest.fn();
  const mockDeleteSkill = jest.fn();
  const mockEditSkill = jest.fn();

  const renderSkillsComponent = (skills = []) => {
    render(
      <Skills
        skills={skills}
        addSkill={mockAddSkill}
        newSkill=""
        setNewSkill={mockSetNewSkill}
        deleteSkill={mockDeleteSkill}
        editSkill={mockEditSkill}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Skills component", () => {
    renderSkillsComponent();
    expect(screen.getByText("Skills component")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add a New Skill")).toBeInTheDocument();
    expect(screen.getByText("Add Skill")).toBeInTheDocument();
  });

  it("renders the list of skills", () => {
    renderSkillsComponent(mockSkills);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("displays a message when no skills are added", () => {
    renderSkillsComponent();
    expect(screen.getByText("No skills added yet.")).toBeInTheDocument();
  });

  it("calls the addSkill function when the Add Skill button is clicked", () => {
    renderSkillsComponent();
    const input = screen.getByPlaceholderText("Add a New Skill");
    const addButton = screen.getByText("Add Skill");

    fireEvent.change(input, { target: { value: "TypeScript" } });
    fireEvent.click(addButton);

    expect(mockSetNewSkill).toHaveBeenCalledWith("TypeScript");
    expect(mockAddSkill).toHaveBeenCalled();
  });

  it("enters edit mode when the Edit button is clicked", () => {
    renderSkillsComponent(mockSkills);
    const editButton = screen.getAllByText("Edit")[0];

    fireEvent.click(editButton);

    expect(screen.getByDisplayValue("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls the editSkill function when the Save button is clicked", () => {
    renderSkillsComponent(mockSkills);
    const editButton = screen.getAllByText("Edit")[0];

    fireEvent.click(editButton);
    const input = screen.getByDisplayValue("JavaScript");
    fireEvent.change(input, { target: { value: "TypeScript" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(mockEditSkill).toHaveBeenCalledWith(1, "TypeScript");
  });

  it("exits edit mode when the Cancel button is clicked", () => {
    renderSkillsComponent(mockSkills);
    const editButton = screen.getAllByText("Edit")[0];

    fireEvent.click(editButton);
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(screen.queryByDisplayValue("JavaScript")).not.toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  it("calls the deleteSkill function when the Delete button is clicked", () => {
    renderSkillsComponent(mockSkills);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(mockDeleteSkill).toHaveBeenCalledWith(1);
  });
});