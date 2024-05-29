import { useState } from 'react'
import { Heading, Box, Container } from '@radix-ui/themes'
import { marked } from 'marked'



//When text is entered into "editor" it shows on the "preview"

//When my markdown previewer first loads, the default text in the #editor 
//field should contain valid markdown that represents at least one of each of the 
//following elements: a heading element (H1 size), a sub heading element (H2 size), 
//a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

//Optional Bonus (you do not need to make this test pass): My markdown previewer 
//interprets carriage returns and renders them as br (line break) elements.

//summary: You type Markdown in the textarea and it spits up html in the preview
//mark library will be used to translate the markdown into html
//the UI library uses shadcn instead of react bootstrap
//decided to uninstall shadcn and use radix-ui

//make sure site is hosted on github pages - not working

//![alt text](image.jpg)
function Markdown () {

  const [markdown, setMarkdown] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstname": "John",
    "lastname": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote


  **bold text**
  `)

  marked.setOptions({
    breaks: true
  })
 
  return (
    
    <Box size="5" py="5" px="5" align="center" style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
      <Container  py="5" px="5" align="center">
        <Heading py="5" px="5" as="h1" align="center" size="9" weight="bold" color="indigo">Markdown Previewer</Heading>
        <br/>
        <br/>

        <div className="flex items-center space-x-2">
        
          
        </div>

        <Heading py="5" px="5" as="h3">Editor</Heading>
        <br />
        <textarea className="input" id="editor" rows="20" value={markdown} cols="40" onChange={(e) => {setMarkdown(e.target.value)}}>
        </textarea>
        
        <br />
        <br />
        <br/>
        <br/>
        
        
        <Heading py="5" px="5" as="h3">Preview</Heading>
        <br />
        <div id="preview"
          dangerouslySetInnerHTML= {{ __html: marked(markdown),
          }}>
        </div>
      </Container>
    </Box>
   
  )
}

export default Markdown