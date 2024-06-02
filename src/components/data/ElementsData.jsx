const elementsData = {
    H: { 
      name: 'Hidrógeno', 
      symbol: 'H', 
      atomicMass: 1.008, 
      atomicNumber: 1, 
      stateAtRoomTemp: 'Gas'
    },
    He: { 
      name: 'Helio', 
      symbol: 'He', 
      atomicMass: 4.0026, 
      atomicNumber: 2, 
      stateAtRoomTemp: 'Gas' 
    },
    Li: { 
      name: 'Litio', 
      symbol: 'Li', 
      atomicMass: 6.94, 
      atomicNumber: 3, 
      stateAtRoomTemp: 'Sólido' 
    },
    Be: { 
      name: 'Berilio', 
      symbol: 'Be', 
      atomicMass: 9.0122, 
      atomicNumber: 4, 
      stateAtRoomTemp: 'Sólido' 
    },
    B: { 
      name: 'Boro', 
      symbol: 'B', 
      atomicMass: 10.81, 
      atomicNumber: 5, 
      stateAtRoomTemp: 'Sólido' 
    },
    C: { 
      name: 'Carbono', 
      symbol: 'C', 
      atomicMass: 12.011, 
      atomicNumber: 6, 
      stateAtRoomTemp: 'Sólido' 
    },
    N: { 
      name: 'Nitrógeno', 
      symbol: 'N', 
      atomicMass: 14.007, 
      atomicNumber: 7, 
      stateAtRoomTemp: 'Gas' 
    },
    O: { 
      name: 'Oxígeno', 
      symbol: 'O', 
      atomicMass: 15.999, 
      atomicNumber: 8, 
      stateAtRoomTemp: 'Gas' 
    },
    F: { 
      name: 'Flúor', 
      symbol: 'F', 
      atomicMass: 18.998, 
      atomicNumber: 9, 
      stateAtRoomTemp: 'Gas' 
    },
    Ne: { 
      name: 'Neón', 
      symbol: 'Ne', 
      atomicMass: 20.180, 
      atomicNumber: 10, 
      stateAtRoomTemp: 'Gas' 
    },
    Na: { 
      name: 'Sodio', 
      symbol: 'Na', 
      atomicMass: 22.990, 
      atomicNumber: 11, 
      stateAtRoomTemp: 'Sólido' 
    },
    Mg: { 
      name: 'Magnesio', 
      symbol: 'Mg', 
      atomicMass: 24.305, 
      atomicNumber: 12, 
      stateAtRoomTemp: 'Sólido' 
    },
    Al: { 
      name: 'Aluminio', 
      symbol: 'Al', 
      atomicMass: 26.982, 
      atomicNumber: 13, 
      stateAtRoomTemp: 'Sólido' 
    },
    Si: { 
      name: 'Silicio', 
      symbol: 'Si', 
      atomicMass: 28.085, 
      atomicNumber: 14, 
      stateAtRoomTemp: 'Sólido' 
    },
    P: { 
      name: 'Fósforo', 
      symbol: 'P', 
      atomicMass: 30.974, 
      atomicNumber: 15, 
      stateAtRoomTemp: 'Sólido' 
    },
    S: { 
      name: 'Azufre', 
      symbol: 'S', 
      atomicMass: 32.06, 
      atomicNumber: 16, 
      stateAtRoomTemp: 'Sólido' 
    },
    Cl: { 
      name: 'Cloro', 
      symbol: 'Cl', 
      atomicMass: 35.45, 
      atomicNumber: 17, 
      stateAtRoomTemp: 'Gas' 
    },
    Ar: { 
      name: 'Argón', 
      symbol: 'Ar', 
      atomicMass: 39.948, 
      atomicNumber: 18, 
      stateAtRoomTemp: 'Gas' 
    },
    K: { 
      name: 'Potasio', 
      symbol: 'K', 
      atomicMass: 39.098, 
      atomicNumber: 19, 
      stateAtRoomTemp: 'Sólido' 
    },
    Ca: { 
      name: 'Calcio', 
      symbol: 'Ca', 
      atomicMass: 40.078, 
      atomicNumber: 20, 
      stateAtRoomTemp: 'Sólido' 
    },
    Sc: { 
      name: 'Escandio', 
      symbol: 'Sc', 
      atomicMass: 44.956, 
      atomicNumber: 21, 
      stateAtRoomTemp: 'Sólido' 
    },
    Ti: { 
      name: 'Titanio', 
      symbol: 'Ti', 
      atomicMass: 47.867, 
      atomicNumber: 22, 
      stateAtRoomTemp: 'Sólido' 
    },
    V: { 
      name: 'Vanadio', 
      symbol: 'V', 
      atomicMass: 50.942, 
      atomicNumber: 23, 
      stateAtRoomTemp: 'Sólido' 
    },
    Cr: { 
      name: 'Cromo', 
      symbol: 'Cr', 
      atomicMass: 51.996, 
      atomicNumber: 24, 
      stateAtRoomTemp: 'Sólido' 
    },
    Mn: { 
      name: 'Manganeso', 
      symbol: 'Mn', 
      atomicMass: 54.938, 
      atomicNumber: 25, 
      stateAtRoomTemp: 'Sólido' 
    },
    Fe: { 
      name: 'Hierro', 
      symbol: 'Fe', 
      atomicMass: 55.845, 
      atomicNumber: 26, 
      stateAtRoomTemp: 'Sólido' 
    },
    Co: { 
      name: 'Cobalto', 
      symbol: 'Co', 
      atomicMass: 58.933, 
      atomicNumber: 27, 
      stateAtRoomTemp: 'Sólido' 
    },
    Ni: { 
      name: 'Níquel', 
      symbol: 'Ni', 
      atomicMass: 58.693, 
      atomicNumber: 28, 
      stateAtRoomTemp: 'Sólido' 
    },
    Cu: { 
      name: 'Cobre', 
      symbol: 'Cu', 
      atomicMass: 63.546, 
      atomicNumber: 29, 
      stateAtRoomTemp: 'Sólido' 
    },
    Zn: { 
      name: 'Zinc', 
      symbol: 'Zn', 
      atomicMass: 65.38, 
      atomicNumber: 30, 
      stateAtRoomTemp: 'Sólido' 
    },
    Ga: { 
      name: 'Galio', 
      symbol: 'Ga', 
      atomicMass: 69.723, 
      atomicNumber: 31, 
      stateAtRoomTemp: 'Sólido' 
    },
    Ge: { 
      name: 'Germanio', 
      symbol: 'Ge', 
      atomicMass: 72.63, 
      atomicNumber: 32, 
      stateAtRoomTemp: 'Sólido' 
    },
    As: { 
      name: 'Arsénico', 
      symbol: 'As', 
      atomicMass: 74.922, 
      atomicNumber: 33, 
      stateAtRoomTemp: 'Sólido' 
    },
    Se: { 
      name: 'Selenio', 
      symbol: 'Se', 
      atomicMass: 78.971, 
      atomicNumber: 34, 
      stateAtRoomTemp: 'Sólido' 
    },
    Br: { 
      name: 'Bromo', 
      symbol: 'Br', 
      atomicMass: 79.904, 
      atomicNumber: 35, 
      stateAtRoomTemp: 'Líquido' 
    },
    Kr: { 
      name: 'Kriptón', 
      symbol: 'Kr', 
      atomicMass: 83.798, 
      atomicNumber: 36, 
      stateAtRoomTemp: 'Gas' 
    },
    Rb: { 
      name: 'Rubidio', 
      symbol: 'Rb', 
      atomicMass: 85.468, 
      atomicNumber: 37, 
      stateAtRoomTemp: 'Sólido' 
    },
    Sr: { 
      name: 'Estroncio', 
      symbol: 'Sr', 
      atomicMass: 87.62, 
      atomicNumber: 38, 
      stateAtRoomTemp: 'Sólido' 
    },
    Y: { 
      name: 'Itrio', 
      symbol: 'Y', 
      atomicMass: 88.906, 
      atomicNumber: 38,
      stateAtRoomTemp: 'Configurar'
    }
}

export default elementsData;