from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/bnb-menu')
destination = Path('/home/ubuntu/bnb-mumbai/public/menu')
destination.mkdir(parents=True, exist_ok=True)

# Only generated, one-to-one dish assets. Existing hero/source photos are kept separately.
assets = [
    'classic-veg-burger.jpg', 'crunchy-surprise-burger.jpg', 'peri-peri-twist-burger.jpg',
    'cheesy-delight-burger.jpg', 'spicy-paneer-burger.jpg', 'cheese-burst-veggie-burger.jpg',
    'classic-chicken-burger.jpg', 'peri-peri-chicken-burger.jpg', 'original-zinger-burger.jpg',
    'spicy-zinger-burger.jpg', 'cheesy-mustard-chicken-burger.jpg', 'bbq-jumbo-chicken-burger.jpg',
    'fish-popcorn-plated.jpg', 'popcorn-chicken.jpg', 'chicken-strips.jpg', 'chicken-wings.jpg',
    'fried-chicken.jpg', 'family-bucket.jpg', 'french-fries.jpg', 'peri-peri-fries.jpg',
    'cheesy-fries.jpg', 'loaded-chicken-fries.jpg', 'cheesy-mexican-nachos-unique.jpg',
    'corn-cheese-sandwich.jpg', 'paneer-tikka-wrap.jpg', 'bbq-paneer-sandwich.jpg',
    'chicken-salad-sandwich.jpg', 'crispy-chicken-wrap.jpg', 'bbq-chicken-wrap.jpg',
    'cheesy-chicken-wrap.jpg', 'malai-tikka-wrap.jpg', 'italian-mustard-chicken-wrap.jpg',
    'corn-cheese-pizza.jpg', 'corn-jalapeno-pizza.jpg', 'cheesy-mushroom-pizza.jpg',
    'exotic-veg-pizza.jpg', 'spicy-paneer-pizza.jpg', 'bbq-paneer-pizza.jpg',
    'cheesy-chicken-pizza.jpg', 'jalapeno-chicken-pizza.jpg', 'peri-peri-chicken-pizza.jpg',
    'smokey-bbq-chicken-pizza.jpg', 'mushroom-pepper-chicken-pizza.jpg', 'chicken-tikka-pizza.jpg',
    'mint-mojito.jpg', 'strawberry-mango.jpg', 'blueberry-mojito.jpg', 'cold-coffee.jpg',
    'oreo-choco-shake.jpg', 'lotus-biscoff-shake.jpg', 'nutella-chocolate-shake.jpg',
    'nutella-choco-brownie.jpg', 'lotus-biscoff-brownie.jpg', 'dubai-pistachio-brownie.jpg',
]

for filename in assets:
    src = source / filename
    if not src.exists():
        raise FileNotFoundError(src)
    with Image.open(src) as image:
        image = image.convert('RGB')
        image.thumbnail((900, 700), Image.Resampling.LANCZOS)
        image.save(destination / filename, 'JPEG', quality=78, optimize=True, progressive=True)

print(f'Optimized {len(assets)} unique dish images into {destination}')
