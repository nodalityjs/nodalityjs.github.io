# namer.sh
for file in *; do
    if [ -f "$file" ]; then
        title="${file%.md}"  # Remove the '.md' extension from the filename
        echo "# $title" | cat - "$file" > temp && mv temp "$file"
    fi
done
