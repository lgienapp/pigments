" Pigments Color Scheme for Vim/Neovim
" Name: pigments.vim
" Author: Lukas Gienapp
" License: MIT

" Set up
set background=dark
hi clear
if exists("syntax_on")
  syntax reset
endif

let g:colors_name = "pigments"

" Define colors
let s:gray = {
  \ "100": "#f1f0ef",
  \ "200": "#dddad7",
  \ "300": "#c8c4bf",
  \ "400": "#b3afab",
  \ "500": "#9d9a97",
  \ "600": "#898683",
  \ "700": "#75726f",
  \ "800": "#615f5d",
  \ "900": "#4f4d4a",
  \ "1000": "#3d3b38"
  \ }

let s:blue = {
  \ "100": "#e2f5f0",
  \ "200": "#b7eceb",
  \ "300": "#98d4dd",
  \ "400": "#79bacd",
  \ "500": "#5ea4c0",
  \ "600": "#4590a9",
  \ "700": "#2e7c92",
  \ "800": "#176778",
  \ "900": "#0b5561",
  \ "1000": "#074248"
  \ }

let s:green = {
  \ "100": "#f0f5c2",
  \ "200": "#d7e9b4",
  \ "300": "#b3cd9b",
  \ "400": "#9bb989",
  \ "500": "#89a377",
  \ "600": "#788d64",
  \ "700": "#677851",
  \ "800": "#56633f",
  \ "900": "#4a512d",
  \ "1000": "#40401f"
  \ }

let s:yellow = {
  \ "100": "#f9f2c8",
  \ "200": "#f6e299",
  \ "300": "#e6c069",
  \ "400": "#d9a850",
  \ "500": "#c98f39",
  \ "600": "#b77927",
  \ "700": "#9f6520",
  \ "800": "#825420",
  \ "900": "#5f3d16",
  \ "1000": "#4b3313"
  \ }

let s:red = {
  \ "100": "#ffede8",
  \ "200": "#ffd3cc",
  \ "300": "#ffb0a4",
  \ "400": "#ff9283",
  \ "500": "#f27666",
  \ "600": "#e15953",
  \ "700": "#cb4245",
  \ "800": "#aa333f",
  \ "900": "#94202b",
  \ "1000": "#720d1e"
  \ }

let s:violet = {
  \ "100": "#f9ecff",
  \ "200": "#eddbff",
  \ "300": "#d7b8fb",
  \ "400": "#c4a1f1",
  \ "500": "#a98ce4",
  \ "600": "#9177d4",
  \ "700": "#7e62c0",
  \ "800": "#6d4da5",
  \ "900": "#5f3f7e",
  \ "1000": "#502f5a"
  \ }

let s:black = "#000000"
let s:white = "#ffffff"

" Function to set highlighting
function! s:h(group, fg, bg, attr)
  if a:fg != ""
    exec "hi " . a:group . " guifg=" . a:fg
  endif
  if a:bg != ""
    exec "hi " . a:group . " guibg=" . a:bg
  endif
  if a:attr != ""
    exec "hi " . a:group . " gui=" . a:attr . " cterm=" . a:attr
  endif
endfunction

" Vim UI
call s:h("Normal", s:gray["100"], s:gray["1000"], "")
call s:h("NonText", s:gray["600"], "", "")
call s:h("Cursor", s:gray["1000"], s:blue["400"], "")
call s:h("CursorLine", "", s:gray["900"], "none")
call s:h("CursorLineNr", s:blue["300"], s:gray["900"], "none")
call s:h("ColorColumn", "", s:gray["900"], "none")
call s:h("Directory", s:blue["400"], "", "")
call s:h("DiffAdd", s:green["300"], s:green["900"], "none")
call s:h("DiffChange", s:yellow["300"], s:yellow["900"], "none")
call s:h("DiffDelete", s:red["300"], s:red["900"], "none")
call s:h("DiffText", s:blue["300"], s:blue["900"], "none")
call s:h("ErrorMsg", s:red["400"], s:gray["1000"], "bold")
call s:h("VertSplit", s:gray["700"], s:gray["700"], "none")
call s:h("Folded", s:gray["500"], s:gray["900"], "")
call s:h("FoldColumn", s:gray["500"], s:gray["900"], "")
call s:h("SignColumn", s:gray["500"], s:gray["900"], "")
call s:h("IncSearch", s:yellow["900"], s:yellow["300"], "none")
call s:h("LineNr", s:gray["600"], s:gray["900"], "none")
call s:h("MatchParen", s:blue["400"], s:gray["800"], "bold")
call s:h("ModeMsg", s:green["400"], "", "")
call s:h("MoreMsg", s:green["400"], "", "")
call s:h("Pmenu", s:gray["100"], s:gray["800"], "none")
call s:h("PmenuSel", s:gray["100"], s:blue["600"], "")
call s:h("PmenuSbar", "", s:gray["700"], "")
call s:h("PmenuThumb", "", s:gray["500"], "")
call s:h("Question", s:blue["400"], "", "")
call s:h("Search", s:yellow["900"], s:yellow["300"], "")
call s:h("SpecialKey", s:gray["600"], "", "")
call s:h("SpellBad", s:red["400"], "", "underline")
call s:h("SpellCap", s:yellow["400"], "", "underline")
call s:h("SpellLocal", s:blue["400"], "", "underline")
call s:h("SpellRare", s:violet["400"], "", "underline")
call s:h("StatusLine", s:gray["100"], s:gray["700"], "none")
call s:h("StatusLineNC", s:gray["500"], s:gray["800"], "none")
call s:h("TabLine", s:gray["500"], s:gray["800"], "none")
call s:h("TabLineFill", s:gray["500"], s:gray["800"], "none")
call s:h("TabLineSel", s:gray["100"], s:blue["600"], "none")
call s:h("Title", s:blue["400"], "", "none")
call s:h("Visual", "", s:gray["700"], "")
call s:h("VisualNOS", "", s:gray["700"], "")
call s:h("WarningMsg", s:yellow["500"], "", "")
call s:h("WildMenu", s:gray["100"], s:blue["500"], "")

" Standard syntax highlighting
call s:h("Comment", s:gray["500"], "", "italic")
call s:h("Constant", s:yellow["400"], "", "")
call s:h("String", s:green["400"], "", "")
call s:h("Character", s:green["400"], "", "")
call s:h("Number", s:yellow["500"], "", "")
call s:h("Boolean", s:yellow["500"], "", "")
call s:h("Float", s:yellow["500"], "", "")
call s:h("Identifier", s:red["400"], "", "none")
call s:h("Function", s:blue["400"], "", "")
call s:h("Statement", s:violet["500"], "", "none")
call s:h("Conditional", s:violet["500"], "", "")
call s:h("Repeat", s:violet["500"], "", "")
call s:h("Label", s:violet["400"], "", "")
call s:h("Operator", s:gray["300"], "", "")
call s:h("Keyword", s:violet["500"], "", "")
call s:h("Exception", s:violet["500"], "", "")
call s:h("PreProc", s:yellow["400"], "", "")
call s:h("Include", s:blue["400"], "", "")
call s:h("Define", s:violet["500"], "", "none")
call s:h("Macro", s:violet["500"], "", "")
call s:h("PreCondit", s:yellow["400"], "", "")
call s:h("Type", s:blue["400"], "", "none")
call s:h("StorageClass", s:yellow["500"], "", "")
call s:h("Structure", s:yellow["500"], "", "")
call s:h("Typedef", s:yellow["500"], "", "")
call s:h("Special", s:blue["300"], "", "")
call s:h("SpecialChar", s:gray["400"], "", "")
call s:h("Tag", s:gray["400"], "", "")
call s:h("Delimiter", s:gray["400"], "", "")
call s:h("SpecialComment", s:gray["400"], "", "")
call s:h("Debug", s:gray["400"], "", "")
call s:h("Underlined", s:blue["400"], "", "underline")
call s:h("Ignore", s:gray["500"], "", "")
call s:h("Error", s:red["500"], s:gray["1000"], "bold")
call s:h("Todo", s:violet["500"], s:gray["1000"], "bold")