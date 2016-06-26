public function GraficosBajos(){
	QualitySettings.currentLevel = QualityLevel.Fastest;
}

public function GraficosSemiBajos(){
	QualitySettings.currentLevel = QualityLevel.Fast;
}

public function GraficosMedioBajos(){
	QualitySettings.currentLevel = QualityLevel.Simple;
}

public function GraficosNormales(){
	QualitySettings.currentLevel = QualityLevel.Good;
}

public function GraficosAltos(){
	QualitySettings.currentLevel = QualityLevel.Beautiful;
}

public function GraficosUltra(){
	QualitySettings.currentLevel = QualityLevel.Fantastic;
}
