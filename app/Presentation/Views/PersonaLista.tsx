import React from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator, Button } from "react-native";
import { usePersonaListaVM } from "@/app/Presentation/Hooks/UsePersonaListaVM";
import { Persona } from "@/app/Domain/Entities/Persona";

export const PersonaLista: React.FC = () => {
  const { listado, loading, error, refresh } = usePersonaListaVM();

  const renderItem = ({ item }: { item: Persona }) => {
    const fecha = item.fechaNacimiento instanceof Date
      ? item.fechaNacimiento.toLocaleDateString()
      : String(item.fechaNacimiento);
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{`${item.nombre} ${item.apellido}`}</Text>
        <Text style={styles.meta}>ID: {item.id} • Nac.: {fecha}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personas</Text>

      {loading && <ActivityIndicator size="large" style={{ marginVertical: 12 }} />}

      {error ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <Button title="Reintentar" onPress={refresh} />
        </View>
      ) : (
        <FlatList
          data={listado}
          keyExtractor={(p: Persona) => String(p.id)}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.empty}>No hay personas</Text>}
          refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} />}
          contentContainerStyle={listado.length === 0 ? styles.emptyContainer : undefined}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: "#eee" },
  name: { fontSize: 16, fontWeight: "600" },
  meta: { fontSize: 12, color: "#666", marginTop: 4 },
  empty: { textAlign: "center", color: "#444", padding: 20 },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorBox: { padding: 12, backgroundColor: "#ffeeee", borderRadius: 6, marginVertical: 12, alignItems: "center" },
  errorText: { color: "#aa0000", marginBottom: 8 }
});
