export const BlockType = {
    HERO: "hero",
    BUTTON_GRID: "button_grid",
    PROJECT: "project_block",
    ABOUT: "about",
    JOURNEY: "journey",
    IMAGE_TEXT: "image-text",
    CONTACT: "contact",
    RESUME: "resume"
}

export const parseHeroBlock = (block) => {
    return {
        title: block.hero_title,
        subtitle: block.hero_subtitle,
        background: block.hero_background,
        body: block.hero_body || null,
        quicklinks: block.quick_links,
        image: block.hero_image,
        scroll: block.hero_scroll,
        socials: block.socials,
        columns: block.columns?._rawColumns.map((column) => ({
            title: column.column_title,
            text: column.column_subtext,
            buttonText: column.column_buttonText,
            buttonUrl: column.column_buttonUrl
        })) || null,
        status: block.status || null,
        type: block._type
    }
}

export const parseButtonGridBlock = (block) => {
    return {
        buttons: block.button.map((button) => ({
            text: button.button_text,
            url: button.button_url,
            shape: button.button_shape,
            colour: button.button_colour
        })),
        type: block._type
    }
}

export const parseAboutBlock = (block) => {
    return {
        profile: block.about_profile,
        bio: block.about_bio,
        avatar: block.about_avatar,
        status: block.hire_status,
        contact: block.contact_btn,
        type: block._type
    }
}

export const parseJourneyBlock = (block) => {
    return {
        steps: block.journey_step.map((step) => (parseImageTextBlock(step))),
        type: block._type
    }
}

export const parseImageTextBlock = (block) => {
    return {
        img_position: block.image_pos,
        image: block.img,
        text: block.text,
        background_colour: block.background_colour || null,
        type: block._type
    }
}

export const parseProjectBlock = (block) => {
    return {
        title: block.title,
        description: block.description,
        tech_stack: block.tech_stack || null,
        logo: block.logo,
        link: block.link,
        type: block._type
    }
}

export const parseContactBlock = (block) => {
    return {
        email: block.email,
        form: block.contact_form,
        socials: block.social_links,
        type: block._type
    }
}

export const parseResumeBlock = (block) => {
    return {
        education: {
            type: 'education',
            items: block.resume_education
        },
        experience: {
            type: 'experience',
            items: block.resume_experience || []
        },

        skills: {
            type: 'skills',
            items: block.resume_key_skills || []
        },
        type: block._type
    }
}

const parsers = new Map([
    [BlockType.HERO, parseHeroBlock],
    [BlockType.BUTTON_GRID, parseButtonGridBlock],
    [BlockType.ABOUT, parseAboutBlock],
    [BlockType.JOURNEY, parseJourneyBlock],
    [BlockType.IMAGE_TEXT, parseImageTextBlock],
    [BlockType.PROJECT, parseProjectBlock],
    [BlockType.CONTACT, parseContactBlock],
    [BlockType.RESUME, parseResumeBlock]
])

const parseData = (data) => {
    const block = data
    if (parsers.has(block._type)) {
        return parsers.get(block._type)(data)
    }
}

export default parseData