# NOTE/TODO: this script is manual, add any addtnl. files when projects are added

mkdir -p public/assets/optimized
mkdir -p public/assets/projects/thumbnails/optimized

optimize_image() {
    local input_file="$1"
    local output_file="$2"
    local max_width="${3:-1200}"
    
    if [ -f "$input_file" ]; then        
        sips -Z $max_width "$input_file" --out "$output_file"
        
        original_size=$(ls -lh "$input_file" | awk '{print $5}')
        optimized_size=$(ls -lh "$output_file" | awk '{print $5}')
        
        echo "  Original: $original_size -> Optimized: $optimized_size"
    else
        echo "Warning: Input file not found: $input_file"
    fi
}

# Optimize main images with high quality dimensions
echo "Optimizing main images..."
optimize_image "public/assets/headshot.png" "public/assets/optimized/headshot.png" 1200
optimize_image "public/assets/minion.png" "public/assets/optimized/minion.png" 600

# Optimize project thumbnails with high quality dimensions
echo "Optimizing project thumbnails..."
optimize_image "public/assets/projects/thumbnails/emojigen_thumb.png" "public/assets/projects/thumbnails/optimized/emojigen_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/rev_thumb.png" "public/assets/projects/thumbnails/optimized/rev_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/ripple_thumb.png" "public/assets/projects/thumbnails/optimized/ripple_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/drbayes_thumb.png" "public/assets/projects/thumbnails/optimized/drbayes_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/ngram_thumb.png" "public/assets/projects/thumbnails/optimized/ngram_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/kinarow_thumb.png" "public/assets/projects/thumbnails/optimized/kinarow_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/shout_thumb.png" "public/assets/projects/thumbnails/optimized/shout_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/mealmaker_thumb.png" "public/assets/projects/thumbnails/optimized/mealmaker_thumb.png" 1200
optimize_image "public/assets/projects/thumbnails/snapchat_thumb.png" "public/assets/projects/thumbnails/optimized/snapchat_thumb.png" 1200

echo "Image optimization complete!"
echo "Optimized images are saved in:"
echo "  - public/assets/optimized/"
echo "  - public/assets/projects/thumbnails/optimized/"
echo ""
echo "You can now update your project files to use these optimized images."
