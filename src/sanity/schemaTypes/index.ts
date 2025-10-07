import { type SchemaTypeDefinition } from 'sanity'
import { homepage } from './homepage'
import { aboutUs } from './about-us'
import { team } from './team'
import { teamMember } from './team-member'
import { successCases } from './success-cases'
import { successCase } from './success-case'
import { cognitivePlatforms } from './cognitive-platforms'
import { loopAiAgentsOrchestra } from './loop-ai-agents-orchestra'
import { loopQ } from './loop-q'
import { platformFacts } from './platform-facts'
import { bookDemo } from './book-demo'
import { contact } from './contact'
import { careers } from './careers'
import { videos } from './videos'
import { mediaAnalystRelations } from './media-analyst-relations'
import { loopAiResearch } from './loop-ai-research'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    aboutUs,
    team,
    teamMember,
    successCases,
    successCase,
    cognitivePlatforms,
    loopAiAgentsOrchestra,
    loopQ,
    platformFacts,
    bookDemo,
    contact,
    careers,
    videos,
    mediaAnalystRelations,
    loopAiResearch,
  ],
}
