from os import listdir, system

src = "./src/stylesheets/sass/"

cmd = "sass ./src/stylesheets/sass/{} ./src/stylesheets/css/{}"

files = listdir(src)

for file in files:
    if ".scss" in file:
        outFile = file.replace(".scss", ".css")
        temp = cmd.format(file, outFile)
        success = system(temp)
        print("%s -> %s" % (not bool(success), temp))
