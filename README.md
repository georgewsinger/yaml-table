# yaml-table

Yaml-table converts [yaml documents](https://en.wikipedia.org/wiki/YAML) to console tables for easy displaying in your terminal.

	$ yaml-table file1.yaml file2.yaml

	+----+----+
	| :a | :b |
	+----+----+
	| 11 |    |
	| 3  | 22 |
	+----+----+

	$ yaml-table dir

	+------------+---------------------------------------------------+----------+--------+------------+
	|   :date    |                    :hypothesis                    | :vrange  |   :pr  | :expirdate |
	+------------+---------------------------------------------------+----------+--------+------------+
	| 2016-01-04 |                             UML activity diagram. | [-2, 20] |    0.9 |            |
	| 2016-01-04 |                             UML activity diagram. | [-2, 20] |    0.9 |            |
	| 2016-01-07 |                          Draft yaml-table README. |          |        |            |
	| 2016-01-04 |                       [SE posts, GCC Review, Bed] |          | [0, 3] |            |
	| 2015-12-25 |                              Skip async sections. |  [-1, 2] |    0.8 |            |
	| 2015-12-23 |                                   Taleb write-up. |   [0, 7] |    0.2 | 2015-12-23 |
	| 2016-01-04 |           Take w/contract: record usage in table. | [-∞, 12] |   0.12 | 2015-12-31 |
	| 2015-12-28 | Read Lein documentation -> Clojure(NodeJS)Script. |          |        |            |
	+------------+---------------------------------------------------+----------+--------+------------+

You can customize which fields from your files get displayed in table outputs. See below for configuration options.

# Installation & Usage

To install, run:

`npm install -g yaml-table`

To use:

`$ yaml-table <filename1> <filename2> ...`

Or, to traverse the contents of a directory (and its subdirectories) for all yaml files:

`$ yaml-table <directory>`

# Configuration

Create `~/.yaml-table` in your home directory to configure yaml-table. This file is, itself, in the yaml format:

```
---
file_extension: "yaml"
headers:
	header1: "Header 1"
	header2: "Header 2"
	header3: "Header 3"
	header4: "Header 4"
	header5: "Header 5"
...
---
file_extension: "yaml2"
headers:
	header1: "Header 1"
	header2: "Header 2"
	header3: "Header 3"
	header4: "Header 4"
	header5: "Header 5"
...
```

Each yaml document encapsulated between "---" and "..." lines specifies a file extension and which fields should be displayed from that file extension (as well as what their table headers should look like).

	$ yaml-table -e yaml2 file1.yaml2 file2.yaml2

	+------------+------------+------------+------------+------------+
	|  Header 1  |  Header 2  |  Header 3  |  Header 4  |  Header 5  |
	+------------+------------+------------+------------+------------+
	| asdf       | foo        |            |            | bar        |
	| 22         |            |            |  55        | 1337       |
	+------------+------------+------------+------------+------------+

# Notes

This project is written in [ClojureScript](https://github.com/clojure/clojurescript/wiki) and compiled to pure nodejs via the Google Closure Compiler(https://developers.google.com/closure/compiler/?hl=en).
