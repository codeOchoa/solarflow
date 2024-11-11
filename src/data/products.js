// Información de los artículos
const items = [{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "",
        "model": "",
        "dimensions": "",
        "weight": "",
        "recommended pv module power (stc) range": "",
        "peak power tracking voltage": "",
        "operating voltage range": "",
        "maximum input voltage": "",
        "maximum input current": "",
        "isc pv": "",
        "rated output power": "",
        "nominal output voltage/range":	"",
        "nominal output current": "",
        "nominal output frequency/range": "",
        "output power factor rating": "",
        "peak efficiency": "",
        "nominal mppt efficiency": "",
        "night power consumption": "",
        "operating ambient temperature range": "",
        "storage temperature range": "",
        "cooling": "",
        "enclosure environmental rating": "",
        "AC Cable": "",
        "cable length": "",
        "wire size": "",
        "plug type": "",
        "communication": "",
        "maximum units connected": "",
        "isolation design": "",
        "safety, emc and grid compliances": ""
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 2,
    "SKU": "SFC-002",
    "installments": 6,
    "state": 2, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Dedicated design for balcony solar plant systems: Introducing the Microinverter EZ1-M, an advanced solution for intelligent home energy management. With its sophisticated features, the Microinverter EZ1-M provides users with unprecedented control over their energy consumption. -Maximum reliability, IP67. -Built in Wi-Fi and Bluetooth. -Safety protection relay integrated. -Max output power reaching 799VA. -Two input channels with independent MPPT. -High Input current to adapter to large modules. Intelligent Power Control at Hand: Take charge of your energy with the APsystems EZ1-M microinverter. WiFi and Bluetooth connectivity enable seamless control via Zendure app, letting you adjust feed-in power from 0-800W effortlessly. Friendly Reminder: Power adjustment by Zendure APP: Just so you know, the output power of the microinverter EZ1-M can be adjusted on the Zendure APP, but only if the microinverter EZ1-M was purchased from an authorized Zendure channel. You can identify these products by the Zendure sticker on the packaging surface and the Zendure instruction card inside the package. Thank you for your attention to this matter!: Maximize PV Energy Production: Each PV module has individual Maximum Peak Power Tracking (MPPT) control, ensuring maximum power production to the utility grid regardless of other module performance. The Microinverter EZI-M optimizes each module's performance within the array, even when affected by shade, dust, different orientation, or other factors. Reliable Operation with Extreme Weather: The Microinverter EZI-M ensures no single point of system failure exists across the PV system. It operates at full power at outdoor temperatures of up to 65°C (149°F) and has an IP67 environmental enclosure rating for outdoor installation. Easy and Safe to install: The EZ1-M Microinverter can be connected to the grid easily and conveniently using its 5m AC extension cable, optimizing power flow, maximizing efficiency, and managing energy needs with ease.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "inversor",
    "rating": {
        "rate": 4.6,
        "options": {
            "option1": {
                "title": "Microinverter EZ1-M with AC Cable",
                "pricebeforce": 186,
                "price": 169,
                "count": 207
            },
            "option2": {
                "title": "",
                "pricebeforce": "",
                "price": "",
                "count": ""
            }
        },
    },
    "images": [
        "../../../public/products/microinverter-ez1-m/microinverter-ez1-m-with-ac-cable-product.webp",
        "../../../public/products/microinverter-ez1-m/apsystem-microinverter-wifi-cable-product_048650ac-8ad5-4edf-a977-f28195b0ba8d.webp",
        "../../../public/products/microinverter-ez1-m/apsystem-microinverter-ez1-m-product.webp",
        "../../../public/products/microinverter-ez1-m/EZ1-M-microinverter-installation.webp",
        "../../../public/products/microinverter-ez1-m/840W-rigid-sp-and-microinverter-EZ1-M-intelligent-control.webp",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
},
{
    "id": 3,
    "SKU": "SFC-003",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
{
    "id": 1,
    "SKU": "SFC-001",
    "installments": 6,
    "state": 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    "description": "Weather-Defying Durability: IP68 Waterproof: Built to withstand nature's challenges, our solar panels boast an IP68 waterproof rating. This superior protection ensures uncompromised performance in harsh weather. Backed by rigorous TUV certification, these panels offer reliability you can trust. Extreme Weather-Resistant Solar Panels: Engineered for resilience, our solar panels defy nature's extremes. Withstanding 2400 Pa wind loads and 5400 Pa snow loads, they stand strong against harsh elements. This robust design ensures unwavering performance in diverse climates, guaranteeing long-term stability and reliability. Enduring Solar: 15-Year Warranty, 25-Year Performance: Backed by a robust 15-year warranty and 25-year performance guarantee of 88.9%, these panels deliver enduring value. Embrace sustainable energy, slash electricity bills, and enjoy peace of mind for decades.",
    "specifications": {
        "name": "Microinverter EZ1-M with AC Cable",
        "model": "EZ1-M",
        "dimensions": "263×218×36.5mm (10.35 x8.58 x1.43)",
        "weight": "2.8kg (6.17lbs)",
        "recommended pv module power (stc) range": "300Wp-730Wp+",
        "peak power tracking voltage": "28-45V",
        "operating voltage range": "16-60V",
        "maximum input voltage": "60V",
        "maximum input current": "20A x 2",
        "isc pv": "25A x 2",
        "rated output power": "799VA",
        "nominal output voltage/range":	"230V/184V-253V",
        "nominal output current": "3.5A",
        "nominal output frequency/range": "50Hz/48Hz-51Hz",
        "output power factor rating": "0.99",
        "peak efficiency": "96.7%",
        "nominal mppt efficiency": "99.5%",
        "night power consumption": "20mW",
        "operating ambient temperature range": "-40°C to +65°C (-40°F~149°F)",
        "storage temperature range": "-40°C to +85°C (-40°F~185°F)",
        "cooling": "natural convection-no fans",
        "enclosure environmental rating": "IP67",
        "AC Cable": "",
        "cable length": "5000mm",
        "wire size": "1.5mm²",
        "plug type": "Schuko",
        "communication": "Built-in Wi-Fi and Bluetooth",
        "maximum units connected": 2,
        "isolation design": "High Frequency Transformers, Galvanically Isolated",
        "safety, emc and grid compliances": "EN 62109-1/-2; EN 61000-6-1/-2/-3/-4; EN 50549-1;, DIN V VDE V 0126-1-1; VFR; UTE C15-712-1; CEI 0-21;, UNE 217002; NTS; RD647; VDE-AR-N 4105"
    },
    "category": "paneles",
    "rating": {
        "rate": 5,
        "options": {
            "option1": {
                "title": "420W Rigid Solar Panels",
                "pricebeforce": 449,
                "price": 409,
                "count": 470
            },
            "option2": {
                "title": "420W Rigid Solar Panels + Easy Brackets",
                "pricebeforce": 580,
                "price": 528,
                "count": 40
            }
        },
    },
    "images": [
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-front-and-rear-views.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-IP68.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-sp-and-microinverter-EZ1-M-extreme-weather-resist.webp",
        "../../../public/products/840w-rigid-solar-panels/420w-rigid-solar-panels-feature-warranty-lifespan.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-rear-view.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-parameters.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-with-brackets-installed.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-product-variant-easy-solar-bracket-kit-ZDSBR002.webp",
        "../../../public/products/840w-rigid-solar-panels/840W-rigid-solar-panels-with-teasy-solar-bracket-kit-product.webp",
        "../../../public/products/840w-rigid-solar-panels/one-set-of-balcony-easy-brackets.webp",
        "../../../public/products/840w-rigid-solar-panels/installed-840w-rigid-solar-panels-with-brackets-back-side-view.webp"
    ]
},
];