# nsis-macos-unicode-bug

This repository contains two [GitHub Actions](https://github.com/features/actions) that compile a <abbr title="Mininal, Reproducible Example">MRE</abbr> of the following NSIS script:

```nsis
OutFile /dev/null
Unicode true

Section
SectionEnd
```

The script compiles on the latest macOS (at that time of this writing, that is macOS 10.15 aka Catalina) using two different `makensis` builds:

- [makensis v3.06.1 (Stable)](https://github.com/idleberg/nsis-macos-unicode-bug/blob/master/.github/workflows/stable.yml)
- [makensis v3.06.1 (Debug)](https://github.com/idleberg/nsis-macos-unicode-bug/blob/master/.github/workflows/debug.yml)

Feel free to fork and adjust the script according to your needs. Please report any insights to the official [issue tracker](https://sourceforge.net/p/nsis/bugs/1165) on SourceForge.
