import NaCal.Matrix as Matrix

# Definir la matriz A
A = Matrix([[1, 1, 1], [-1, 1, -1]])

# Calcular A^T
A_transpose = A.transpose()

# Calcular A^T A
ATA = A_transpose * A

# Calcular la inversa de A^T A
ATA_inverse = ATA.inverse()

# Calcular P = A (A^T A)^{-1} A^T
P = A * ATA_inverse * A_transpose

# Definir el vector b
b = Matrix([[2], [0], [-2]])

# Calcular el vector de proyección p = Pb
p = P * b

# Verificar si p es igual a b
if p == b:
    print("El vector de proyección p es igual a b.")
else:
    print("El vector de proyección p no es igual a b.")

# Mostrar la matriz P
print("La matriz de proyección P es:")
print(P)

# Verificar si P es invertible
if P.is_invertible():
    print("La matriz P es invertible.")
else:
    print("La matriz P no es invertible.")