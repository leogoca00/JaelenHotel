import os

def extract_code(src_dir, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        # Escribir encabezado
        f.write('CÓDIGO DEL PROYECTO JAELEN HOTEL\n')
        f.write('=' * 80 + '\n\n')

        # Escribir estructura de carpetas
        f.write('ESTRUCTURA DE CARPETAS\n')
        f.write('=' * 80 + '\n')
        f.write("""src/
├── App.jsx
├── main.jsx
├── assets/
│   ├── images/
│   │   ├── hotel_entrance.jpg
│   │   ├── hotel_hall.jpg
│   │   ├── hotel_room.jpg
│   │   ├── hotel_restaurant.jpg
│   │   ├── hotel_pool.jpg
│   │   ├── socorro/
│   │   │   ├── room-main.jpg
│   │   │   ├── room-bedroom.jpg
│   │   │   ├── room-bathroom.jpg
│   │   │   ├── room-living.jpg
│   │   │   └── room-view.jpg
│   │   └── zaragocilla/
│   │       └── places-zaragocilla.jpg
│   └── videos/
│       └── hero.mp4
├── components/
│   ├── layout/
│   │   ├── Layout.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── MainHero.jsx
│       ├── HeroSection.jsx
│       ├── Navbar.jsx
│       ├── SectionPreviews.jsx
│       ├── ImageGallery.jsx
│       └── ThemeToggle.jsx
├── hooks/
│   └── useTheme.js
├── pages/
│   ├── MainPage.jsx
│   ├── Places.jsx
│   ├── Gallery.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── SocorroProject.jsx
└── styles/
    └── index.css
""")
        f.write('\n' + '=' * 80 + '\n\n')

        # Extraer código de todos los archivos .jsx, .js y .css
        for dirpath, dirnames, filenames in os.walk(src_dir):
            # Saltar la carpeta de imágenes
            if 'images' in dirpath:
                continue
            
            for filename in filenames:
                if filename.endswith(('.jsx', '.js', '.css')):
                    filepath = os.path.join(dirpath, filename)
                    relative_path = os.path.relpath(filepath, src_dir)
                    
                    f.write('\n' + '=' * 80 + '\n')
                    f.write(f'File: {relative_path}\n')
                    f.write('=' * 80 + '\n\n')
                    
                    try:
                        with open(filepath, 'r', encoding='utf-8') as source_file:
                            content = source_file.read()
                            f.write(content)
                            if not content.endswith('\n'):
                                f.write('\n')
                    except Exception as e:
                        f.write(f'Error reading file: {str(e)}\n')

# Uso del script
src_directory = './src'  # Carpeta src del proyecto
output_file = 'jaelen_hotel_code_complete.txt'
extract_code(src_directory, output_file)
print(f"Código extraído y guardado en {output_file}")