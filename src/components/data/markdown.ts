export const GitHubMarkdown = {
  title: "Markdown",
  content: {
    toggleDetails: {
      title: "Togglable details",
      snippet: `<details open>
  <summary>Hello</summary>
  World!
  <img src="" />

  <table>
    <tr>
      <th>In dev:</th>
      <td><img src="" /></td>
    </tr>
    <tr>
      <th>In this branch:</th>
      <td><img src="" /></td>
    </tr>
  </table>
</details>`,
    },
    highlight: {
      title: "Highlight",
      snippet: {
        note: `> [!NOTE]  
> Highlights information that users should take into account, even when skimming.`,
        tip: `> [!TIP]
> Optional information to help a user be more successful.`,
        important: `> [!IMPORTANT]  
> Crucial information necessary for users to succeed.`,
        warning: `> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.`,
        caution: `> [!CAUTION]
> Negative potential consequences of an action.`,
      },
    },
  },
  labels: [
    {
      display: "markdown",
      name: "markdown",
    },
    {
      display: ".md",
      name: "markdown",
    },
  ],
};
