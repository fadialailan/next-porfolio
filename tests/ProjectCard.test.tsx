/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { ProjectCard } from "@/components/ProjectCard";
import {v4 as uuidV4} from "uuid";


test("name in card", () => {
  render(<ProjectCard name="url shortner" project_id={uuidV4()} description={"a url shortner"} language_iso_code={"en"}/>)
  const elem = screen.getByText("url shortner");
  expect(elem).toBeInTheDocument()
})
