import { expect, test } from 'vitest'
import { skills as Skills, projects as Projects } from '../data/index'
import { SKILL_CATEGORIES } from '../types/portfolio'

test('Unique Project id test', () => {
    // Check that all projects have unique ids
    const projectIds = Projects.map((project) => project.id)
    expect(Projects.length).toBeGreaterThan(0) // Ensure there is at least one project
    for (const id of projectIds) {
        expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/) // Ensure each id follows the kebab-case format and requires at least one character (lowercase letters, numbers, and hyphens)
    }
    // Check for duplicates
    const duplicateIds = projectIds.filter((id, index) => projectIds.indexOf(id) !== index) // Filter out duplicate ids
    expect(duplicateIds).toEqual([]) // Check for uniqueness (lists the duplicated ids)
})

test('Project skills name test', () => {
    // Check that all skills used in projects are present in the skills list
    const skillNameList = Skills.map((skill) => skill.name)
    const projectSkillsName = Projects.flatMap((project) => project.skills) // Extract skill names from all projects
    expect(Skills.length).toBeGreaterThan(0) // Ensure there is at least one skill
    expect(Skills.every((skill) => skill.name.trim() !== '')).toBe(true) // Ensure no empty names

    for (const skill of projectSkillsName) {
        expect(skillNameList).toContain(skill) // Ensure each skill name is present in the list of skill names
    }
})

test('Unique Skill name test', () => {
    // Check that all skills have unique names
    const skillNames = Skills.map((skill) => skill.name)
    expect(Skills.length).toBeGreaterThan(0) // Ensure there is at least one skill
    // Check for duplicates with a filter method that returns an array of duplicate names
    const duplicateNames = skillNames.filter((name, index) => skillNames.indexOf(name) !== index)
    expect(duplicateNames).toEqual([]) // Check for uniqueness (lists the duplicated names, if names in array are unique, the array will be empty)
    expect(Skills.every((skill) => skill.name.trim() !== '')).toBe(true) // Ensure no empty names
})

test('Skill category test', () => {
    // Check that all skills have valid categories

    const skillCategories = SKILL_CATEGORIES
    expect(Skills.length).toBeGreaterThan(0) // Ensure there is at least one skill
    for (const skill of Skills) {
        expect(skillCategories).toContain(skill.category) // Ensure each skill category is valid
    }
})
