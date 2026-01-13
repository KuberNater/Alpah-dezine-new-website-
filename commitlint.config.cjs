module.exports = {
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 20],
    'commit-format': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'commit-format': ({ raw }) => {
          return [
            /^#\d+\s-\s[A-Z][^.]*\.$/.test(raw.trim()),
            'Commit message must follow format: "#<task-number> - Message starting with capital and ending with period."',
          ];
        },
      },
    },
  ],
};