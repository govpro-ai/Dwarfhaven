import os

declaration_fs = [f for f in os.listdir('./dist') if f.endswith('.d.ts')]

declarations = ""
for declaration_f in declaration_fs:
  if declaration_f.endswith('index.d.ts'):
    continue
  with open("./dist/" + declaration_f) as f:
    declaration = f.read()
  declarations += declaration
  declarations += "\n"

with open("Dwarfhaven.d.ts", 'w') as f:
  f.write(declarations)