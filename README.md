# yaml-table

Yaml-table (written in ClojureScript but compiled to pure nodejs) converts [yaml documents](https://en.wikipedia.org/wiki/YAML) to console tables for easy displaying in your terminal. An example with one file:

	$ yaml-table file1.yaml

	+----+----+----+----+
	| A  | B  | C  | D  |
	+----+----+----+----+
	| 11 | 12 | 15 | 16 |
	+----+----+----+----+

An example with a directory full of yaml files:

	$ yaml-table dir

	+------------+----------+--------+------------+
	|    Date    |  Range   |   Pr   | Expiration |
	+------------+----------+--------+------------+
	| 2016-01-04 | [-2, 20] |    0.9 |            |
	| 2016-01-04 | [-2, 20] |    0.9 |            |
	| 2016-01-07 |          |        |            |
	| 2016-01-04 |          | [0, 3] |            |
	| 2015-12-25 |  [-1, 2] |    0.8 |            |
	| 2015-12-23 |   [0, 7] |    0.2 | 2015-12-23 |
	| 2016-01-04 | [-∞, 12] |   0.12 | 2015-12-31 |
	| 2015-12-28 |          |        |            |
	+------------+----------+--------+------------+

You can customize table headers as well as which fields from your yaml files should be displayed. See below for configuration options.

# Installation & Usage

To install, run:

`npm install -g yaml-table`

To use:

`$ yaml-table <yaml_filename>`

Or, to traverse the contents of a directory (and its subdirectories) for all yaml files:

`$ yaml-table <directory>`

# Configuration

Create `~/.yaml-table` in your home directory to configure yaml-table. This file is itself in the yaml format:

	---
	table: "dec-table"
	file_extension: ".dec"
	sort_field: "date"
	options:
		skinny: true
		intersectionCharacter: "Y"
		columns:
			- 
			 field: "date"
			 name: "Date"
	...
	---
	table: "table-name"
	file_extension: ".yaml"
	sort_field: "header1"
	options:
		skinny: true
		intersectionCharacter: "X"
		columns:
			- 
			 field: "header1"
			 name: "Header 1"
			- 
			 field: "header2"
			 name: "Header 2"
			- 
			 field: "header3"
			 name: "Header 3"
			- 
			 field: "header4"
			 name: "Header 4"
			- 
			 field: "header5"
			 name: "Header 5"
	...

Each yaml document -- encapsulated between "---" and "..." -- specifies a table and its fields and headers.  Tables are given a name (accessed via `-n` in the command line), an extension (`-e`), and a number of rows (`-r`).  You can also specifiy in `~/.yaml-table` which field should be used to sort the table.  These options default to `-n default`, `-e .yaml`, and `-r 15` when left unspecified at the prompt.

Using the config above, a complete `yaml-table` command might look as follows:

	$ yaml-table -e .yaml -n table-name -r 10 dir

	+------------+------------+------------+------------+------------+
	|  Header 1  |  Header 2  |  Header 3  |  Header 4  |  Header 5  |
	+------------+------------+------------+------------+------------+
	| asdf       | foo        |            |            | bar        |
	| 22         |            |            |  55        | 1337       |
	+------------+------------+------------+------------+------------+

# TODO

- Allow the display of nested fields.
- Make yaml-table intelligently infer table headers from files (instead of forcing users to manually specify them within `~/.yaml-table`)

This project is written in [ClojureScript](https://github.com/clojure/clojurescript/wiki) and compiled to pure nodejs via the [Google Closure Compiler](https://developers.google.com/closure/compiler/?hl=en).

